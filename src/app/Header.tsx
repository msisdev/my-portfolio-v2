import { Box, Button, Flex, Heading, Link } from "@radix-ui/themes"
import { $PATH, $URL } from "~/config"

type Menu = keyof Pick<typeof $PATH, "about" | "project">

export default function Header() {
  return (
    <header style={{ position: "sticky" }}>
      <Box
        p="2"      
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-5)",
          height: "var(--space-8)",
          boxShadow: "var(--shadow-3)",
        }}
      >
        <Flex height="100%" justify="center" align="center">
          <Flex width="100%" justify="between">
            <LinkButton href={$PATH.home}>
              <Heading>RDEV</Heading>
            </LinkButton>
            <LinkButton href={$URL.github}>
              <i className="devicon-github-original" style={{ fontSize: "var(--font-size-7" }} />
            </LinkButton>
          </Flex>
          <Flex
            position="absolute"
            gap="5"
            align="center"
          >
            <MenuButton to="about" />
            <MenuButton to="project" />
          </Flex>
        </Flex>
      </Box>
    </header>
  )
}

type LinkButtonProps = {
  children: React.ReactNode
  href: string
}
function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link href={href} underline="none">
      {children}
    </Link>
  )
}

type MenuButtonProps = {
  to: Menu
}
function MenuButton({ to }: MenuButtonProps) {
  function getText() {
    switch (to) {
      case "about":   return "소개"
      case "project": return "프로젝트"
      default: throw "Unexpected"
    }
  }
  return (
    <Link href={$PATH[to]}>
      <Button variant="ghost">
        {getText()}
      </Button>
    </Link>
  )
}
