import { FC, useMemo } from "react"
import {
  attributes as attributeData,
  technomancerAttributes,
} from "@/data/attributes"
import { useRunnerEssence } from "@/hooks/useRunnerEssence"
import { CharSheetTableProps } from "."
import { InitiativeTable } from "./InitiativeTable"
import { SkillsTable } from "./SkillsTable"

const initAttributes = {
  bod: 0,
  agi: 0,
  rea: 0,
  str: 0,
  wil: 0,
  log: 0,
  int: 0,
  cha: 0,
}

export const AttributeTable: FC<CharSheetTableProps> = ({ runner }) => {
  const isTechnomancer = runner.magres === "Technomancer"

  const attributes = useMemo(
    () =>
      Object.entries(
        isTechnomancer ? technomancerAttributes : attributeData,
      ).reduce((acc, [label, key]) => {
        const { adjustment, karma = 0, points } = runner.attributes[key]
        acc[label] = adjustment + karma + points + 1
        return acc
      }, initAttributes),
    [isTechnomancer, runner.attributes],
  )

  const essence = useRunnerEssence(runner)
  const attributeEntries = Object.entries(attributes)

  return (
    <>
      <section>
        <h2 id="attribute-table">Attributes</h2>
        <table aria-labelledby="attribute-table">
          <thead>
            <tr>
              {attributeEntries.map(([att]) => (
                <th id={att} key={att}>
                  {att}
                </th>
              ))}
              <th id="edg">edg</th>
              <th id="ess">ess</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {attributeEntries.map(([att, value]) => (
                <td aria-labelledby={att} key={att}>
                  {value}
                </td>
              ))}
              <td aria-labelledby="edg">
                {Object.values(runner.attributes.Edge).reduce(
                  (acc, val) => acc + val,
                  1,
                )}
              </td>
              <td aria-labelledby="ess">{essence}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <InitiativeTable runner={runner} attributes={attributes} />
      <SkillsTable runner={runner} attributes={attributes} />
    </>
  )
}
