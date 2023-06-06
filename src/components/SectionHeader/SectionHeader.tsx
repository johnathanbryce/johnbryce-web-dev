import styles from './SectionHeader.module.css'
// internal components
import LineHeadingBreak from '../LineHeadingBreak/LineHeadingBreak'

interface SectionHeaderProps {
    title: string,
    isOur?: boolean,
    isWho?: boolean
}

function SectionHeader({title, isOur, isWho}: SectionHeaderProps) {
  return (
    <div className={styles.section_header}>
        {isOur && <h2><span className={styles.title_standout_color}>OUR</span> {title}</h2>}
        {isWho && <h2><span className={styles.title_standout_color}>WHO</span> {title}</h2>}
        <LineHeadingBreak />
    </div>
  )
}

export default SectionHeader