/* eslint-disable @next/next/no-img-element */
import { AspectRatio, Box, Button, Card, Container, Flex, Grid, Heading, Section, Tabs, Text, Tooltip } from "@radix-ui/themes";

const tabs = [
  ["about", "소개"],
  ["tech", "기술"],
]

export default function Page() {
  return (
    <>
      <About />
      <Tech />
      <Project />
    </>
  )
}

function About() {
  return (
    <Section>
      <Flex direction="column" gap="5">
        
        <Heading as="h1" size="8">구르는 개발자 김민섭 입니다.</Heading>
        <Flex direction="column" gap="2">
          <Text as="p">
            웹 개발 공부를 시작한지 1년이 된 신입 개발자 입니다.
          </Text>
          <Text as="p">
            아직 배워야할 점이 많지만, 저만의 플랫폼을 개발한다는 꿈을 안고 나아가고 있습니다.
          </Text>
        </Flex>
      </Flex>
    </Section>
  )
}

const iconSize = "clamp(5rem, 11vw, 10rem)"
const iconStyle: React.CSSProperties = { fontSize: iconSize }
function Tech() {
  return (
    <Section>
      <Flex direction="column" gap="5">
        <Heading as="h2" size="8">기술</Heading>

        <Flex wrap="wrap">
          <Tooltip content="ReactJS">
            <ReactIcon />
          </Tooltip>
          <Tooltip content="RemixJS">
            <RemixIcon />
          </Tooltip>
          <Tooltip content="PostgreSQL">
            <PostgresIcon />
          </Tooltip>
          <Tooltip content="Prisma">
            <PrismaIcon />
          </Tooltip>
          <Tooltip content="Cloudflare">
            <CloudflareIcon />
          </Tooltip>
          <Tooltip content="Github Actions">
            <ActionsIcon />
          </Tooltip>
        </Flex>

        <Flex direction="column" gap="2">
          <Text as="p">
            기술 스택을 구성할 때 <Text>개발 경험, 확장성, 성능</Text> 사이에서 균형을 맞추는게 중요하다고 생각합니다.
          </Text>
          <Text as="p">
            항상 문제 해결에 적합한 기술을 선택하려고 노력합니다.
          </Text>
        </Flex>
      </Flex>
    </Section>
  )
}

const ReactIcon = () => <i className="devicon-react-plain" style={iconStyle} />
const RemixIcon = () => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 411 473" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M392.946 364.768C397.201 419.418 397.201 445.036 397.201 473H270.756C270.756 466.909 270.865 461.337 270.975 455.687C271.317 438.123 271.674 419.807 268.828 382.819C265.067 328.667 241.748 316.634 198.871 316.634H160.883H0V218.109H204.889C259.049 218.109 286.13 201.633 286.13 158.011C286.13 119.654 259.049 96.4098 204.889 96.4098H0V0H227.456C350.069 0 411 57.9117 411 150.42C411 219.613 368.123 264.739 310.201 272.26C359.096 282.037 387.681 309.865 392.946 364.768Z" fill="#121212"/>
    <path d="M0 473V399.553H133.697C156.029 399.553 160.878 416.116 160.878 425.994V473H0Z" fill="#121212"/>
  </svg>
)
const PostgresIcon = () => <i className="devicon-postgresql-plain" style={iconStyle} />
const PrismaIcon = () => <i className="devicon-prisma-plain" style={iconStyle} />
const CloudflareIcon = () => <i className="devicon-cloudflare-plain" style={iconStyle} />
const ActionsIcon = () => <i className="devicon-githubactions-plain" style={iconStyle} />

function Project() {
  return (
    <Section>
      <Flex direction="column" gap="5">
        <Heading as="h2" size="8">프로젝트</Heading>
        <Flex direction="column" gap="2">
          <Text as="p">
            기술을 익히는 것 뿐만 아니라 문제 해결 능력을 높일 수 있는 프로젝트를 선택했습니다.
          </Text>
        </Flex>

        <Grid columns={{ initial: "1", sm: "2" }} gap="5">
          <Card>
            <Flex width="100%" height="100%" direction="column" align="center" gap="2" justify="between">
              <img src="/images/drincc.png" alt="alleys.app" style={{
                objectFit: "cover",
                width: "80%",
              }} />
              <Button size="3">
                Drincc
                <i className="material-symbols-outlined">search</i>
              </Button>
            </Flex>
          </Card>
          <Card>
            <Flex width="100%" height="100%" direction="column" align="center" gap="2" justify="between">
              <img src="/images/alleys.png" alt="alleys.app" style={{
                objectFit: "cover",
                width: "80%",
              }} />
              <Button size="3">
                Alleys
                <i className="material-symbols-outlined">search</i>
              </Button>
            </Flex>
          </Card>
        </Grid>
      </Flex>
    </Section>
  )
}