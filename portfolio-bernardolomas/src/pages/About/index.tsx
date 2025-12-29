import Bio from "./Bio"
import Stack from "./Stack"
import Experience from "./Experience"

export default function About() {
  return (
    <div className="space-y-24">
      <Bio />
      <Stack />
      <Experience />
    </div>
  )
}
