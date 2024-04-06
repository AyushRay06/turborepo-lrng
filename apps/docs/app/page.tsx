import Image from "next/image"
import styles from "./page.module.css"
import { Button } from "@repo/ui/button"

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Button appName="web app">Hello</Button>
    </main>
  )
}
