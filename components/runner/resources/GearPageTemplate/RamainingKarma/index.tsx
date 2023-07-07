import { Quality } from "@/types/Qualities"
import { Runner } from "@/types/runner"
import { FC, useMemo } from "react"

interface Props {
  runner: Runner
}

export const RemainingKarma: FC<Props> = ({ runner }) => {
  const positiveQualityKarma = useMemo(
    () => totalKarmaFromQualities(runner?.qualities?.positive),
    [runner?.qualities?.positive],
  )
  const negativeQualityKarma = useMemo(
    () => totalKarmaFromQualities(runner?.qualities?.negative),
    [runner?.qualities?.negative],
  )
  return (
    <dl>
      <dt aria-label="Karma">Karma</dt>
      <dd aria-label="Karma Value">
        {50 - positiveQualityKarma + negativeQualityKarma}
      </dd>
      <dt aria-label="Qualities">Qualities</dt>
      <dd aria-label="Qualities Value">
        {6 -
          (runner.qualities?.positive?.length ?? 0) -
          (runner.qualities?.negative?.length ?? 0)}
        /6
      </dd>
    </dl>
  )
}

function totalKarmaFromQualities(qualities: Quality[]) {
  if (qualities) {
    return qualities.reduce(
      (karmaTotal, { karma, currentLevel = 1 }) =>
        karmaTotal + karma * currentLevel,
      0,
    )
  }
  return 0
}
