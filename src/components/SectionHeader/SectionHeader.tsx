import styles from './SectionHeader.module.css'
// internal components
import LineHeadingBreak from '../LineHeadingBreak/LineHeadingBreak'

interface SectionHeaderProps {
    title: string
}

function SectionHeader({title}: SectionHeaderProps) {
  return (
    <div className={styles.section_header}>
        <h2><span className={styles.title_standout_color}>OUR</span> {title}</h2>
        <LineHeadingBreak />
    </div>
  )
}

export default SectionHeader