import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { GearDroneMod, GearMod, GearModdableRated } from "@/types/Resources"
import { CircularProgress, Grid } from "@material-ui/core"
import { useRouter } from "next/router"
import React from "react"
import { DispatchContext } from "../util"
import { Props as GearPageProps } from "./"
import { GearTable } from "./GearTable"
import { RemainingCapacity } from "./RemainingCapacity"
import { RemainingNuyen } from "./RemainingNuyen"
import { BreadCrumpOption, ResourceBreadCrumbs } from "./ResourceBreadCrumbs"

interface GearModPageProps<G> extends GearPageProps<G> {
  previousPath: BreadCrumpOption
  hasCapacity?: boolean
}

type ModsType = GearMod | GearDroneMod

export function GearModPageTemplate<G extends ModsType>({
  previousPath,
  resourceKey,
  listOfGear,
  addGearTableConfig,
  removeGearTableConfig,
  hasCapacity = true,
}: GearModPageProps<G>) {
  const {
    query: { gearIndex },
  } = useRouter()
  const [runner, dispatch] = useRunnerAccess<ModsType>(
    (runner, { payload }) => {
      return {
        ...runner,
        resources: {
          ...runner.resources,
          [resourceKey]: [
            ...runner.resources[resourceKey].slice(0, gearIndex),
            {
              ...runner.resources[resourceKey][gearIndex],
              mods:
                typeof payload === "number"
                  ? [
                      ...runner.resources[resourceKey][gearIndex].mods.slice(
                        0,
                        payload,
                      ),
                      ...runner.resources[resourceKey][gearIndex].mods.slice(
                        payload + 1,
                      ),
                    ]
                  : [
                      ...(runner.resources[resourceKey][gearIndex]?.mods ?? []),
                      payload,
                    ],
            },
            ...runner.resources[resourceKey].slice(+gearIndex + 1),
          ],
        },
      }
    },
  )
  if (runner) {
    const gearBeingModded: GearModdableRated =
      runner.resources[resourceKey][gearIndex]
    const gearName = `${gearBeingModded.name} (${gearIndex})`
    const modsOnGear = gearBeingModded.mods
    return (
      <>
        <ResourceBreadCrumbs
          activePage={gearName}
          previousPage={previousPath}
        />
        <RemainingNuyen runner={runner} />
        {hasCapacity && <RemainingCapacity gear={gearBeingModded} />}
        <DispatchContext.Provider value={dispatch}>
          <Grid item md={6}>
            <GearTable listOfGear={listOfGear} cols={addGearTableConfig} />
          </Grid>

          {modsOnGear && (
            <Grid item md={6}>
              <h2>Mods on {gearName}</h2>
              <GearTable<ModsType>
                cols={removeGearTableConfig}
                listOfGear={modsOnGear}
              />
            </Grid>
          )}
        </DispatchContext.Provider>
      </>
    )
  }
  return <CircularProgress />
}
