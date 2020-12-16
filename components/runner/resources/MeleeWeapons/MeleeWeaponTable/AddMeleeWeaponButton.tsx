import { FC } from "react"
import { Payload } from ".."
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { GearWeaponMelee } from "../../../../../types/Resources"
import { AddButton } from "../../../../common"

interface Props {
  meleeWeapon: GearWeaponMelee
  dispatch: DispatchAction<undefined, Payload>
}

export const AddMeleeWeaponButton: FC<Props> = ({ meleeWeapon, dispatch }) => (
  <AddButton
    aria-label={`Add ${meleeWeapon.name}`}
    onClick={() =>
      dispatch({
        type: undefined,
        payload: meleeWeapon,
      })
    }
  />
)
