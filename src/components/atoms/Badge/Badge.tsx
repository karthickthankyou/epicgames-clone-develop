export interface IBadgeProps {
  badgeText: string
  classes?: string
}

const Badge = ({ badgeText, classes }: IBadgeProps) => (
  <span
    className={`${classes} inline-block px-1 text-xs font-semibold uppercase bg-gray-700 border border-gray-700 rounded-sm`}
  >
    {badgeText}
  </span>
)

export default Badge
