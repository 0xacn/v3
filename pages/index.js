import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Heading,
  Image,
  Link,
  Text
} from 'theme-ui'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Slide } from 'react-reveal'
import NextLink from 'next/link'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import Icon from '../components/icon'
import BGImg from '../components/background-image'
import ForceTheme from '../components/force-theme'
import SlideDown from '../components/slide-down'
import FadeIn from '../components/fade-in'
import Photo from '../components/photo'
import Footer from '../components/footer'

import Announcement from '../components/announcement'
// import { timeSince } from '../lib/dates'

let Highlight = styled(Text)`
  color: inherit;
  border-radius: 1em 0 1em 0;
  background: linear-gradient(
    -100deg,
    rgba(250, 247, 133, 0.33),
    rgba(250, 247, 133, 0.66) 95%,
    rgba(250, 247, 133, 0.1)
  );
`
Highlight = Highlight.withComponent('mark')

const Feature = ({ icon, color, name, desc, children, ...props }) => (
  <Box {...props}>
    {children || (
      <Box
        as="span"
        sx={{
          width: 'fit-content',
          bg: color,
          borderRadius: 18,
          lineHeight: 0,
          p: 2,
          mb: 1,
          display: 'inline-block',
          transform: ['scale(0.75)', 'none'],
          transformOrigin: 'bottom left',
          boxShadow:
            'inset 2px 2px 6px rgba(255,255,255,0.2), inset -2px -2px 6px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Icon glyph={icon} size={48} />
      </Box>
    )}
    <Box>
      <Heading as="h3" variant="headline" mb={2}>
        {name}
      </Heading>
      <Text
        as="p"
        variant="subtitle"
        sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
      >
        {desc}
      </Text>
    </Box>
  </Box>
)

const Page = () => (
  <>
    <Meta
      as={Head}
      title="Come for the skills, stay for the people."
      description="Hack Club is a global nonprofit network of high school makers & student-led coding clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world."
      image="https://cloud-epiki4yvg.vercel.app/2020-09-09_drbp62kayjuyyy0ek89mf9fwcp5t4kuz.jpeg"
    />
    <Head>
      <meta
        property="og:logo"
        content="https://assets.hackclub.com/icon-rounded.png"
        size="512x512"
      />
    </Head>
    <ForceTheme theme="light" />
    <Nav />
    <Box
      as="header"
      sx={{
        bg: 'dark',
        pt: [5, 6],
        pb: [4, 5],
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <BGImg
        src="/home/hero.png"
        width={2224}
        height={1249}
        alt="Hack Clubbers gather at the Flagship 2019 conference"
        priority
      />
      
{/*        <Announcement
          copy="Applications are now open"
          caption="It's feeling the like the end of the end of the world. Fall semester is coming"
          href="https://apply.hackclub.com"
          iconLeft="clubs"
          color="primary"
        />*/}
      
      <SlideDown duration={768}>
        <Heading
          as="h1"
          variant="ultratitle"
          sx={{
            color: 'white',
            textShadow: 'text',
            filter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.5))',
            WebkitFilter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.5))',
            maxWidth: [null, 'copyUltra'],
            my: [3, 4],
            mx: 'auto',
            zIndex: 1
          }}
        >
          <Text
            as="span"
            sx={{
              lineHeight: 0.875,
              display: 'block',
              pb: 3
            }}
          >
            Come for the skills, stay for the people.
          </Text>
          <Text
            as="span"
            sx={{
              WebkitTextStroke: 'currentColor',
              WebkitTextStrokeWidth: ['2px', '3px'],
              WebkitTextFillColor: 'transparent'
            }}
          >
            Hack&nbsp;Club
          </Text>
          .
        </Heading>
      </SlideDown>
      <FadeIn duration={1024}>
        <Text
          as="p"
          variant="lead"
          sx={{
            color: 'white',
            textShadow: 'text',
            maxWidth: 620,
            mt: 0,
            mx: 'auto',
            mb: [3, 4]
          }}
        >
          Hack Club is a non-profit network of clubs for teenagers who make things with code and technology. 
          <br/><br/>
          Start one at your own high school and
        </Text>
        <Button
          as="a"
          variant="ctaLg"
          href="https://apply.hackclub.com"
          target="_blank"
          rel="noopener"
        >
          APPLY NOW
        </Button>
      </FadeIn>
    </Box>
    <Box as="section" sx={{ py: [4, 5], color: 'black' }}>
      <Container>
        <Text as="p" variant="eyebrow">
          The rundown
        </Text>
        <Heading as="h2" variant="title">
          Teen clubs for the {' '}
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 2,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: '#5d114c',
              bg: 'rgb(255, 212, 64)'
            }}
          >
            joy of code
          </Text>
          .
        </Heading>
        <Text as="p" variant="lead" sx={{ maxWidth: 'copyPlus' }}>
          Hack Clubs typically meet for 1.5 hours each week in high schools, 
          makerspaces, community centers, churches, and any other venue
          where teenagers can gather. Each club is unique but a typical meeting
          would look like:
        </Text>
        <Grid columns={[null, null, 2, '3fr 2fr']} gap={[3, 4]} pt={[3, 4]}>
          <Photo
            src="https://dl.airtable.com/.attachmentThumbnails/904cf56ceac6b0921eceae02958dcd29/5851864a"
            alt="Summer Creek Hack Club meeting, February 2020"
            width={3000}
            height={2550}
            showAlt
          />
          <Grid
            columns="auto 1fr"
            sx={{
              gridColumnGap: 3,
              span: {
                width: 36,
                height: 36,
                borderRadius: 24,
                display: 'inline-block',
                fontSize: 2,
                lineHeight: '30px',
                textAlign: 'center',
                fontWeight: 'bold',
                border: '3px solid currentColor'
              },
              p: { my: 0 },
              strong: { display: 'block' }
            }}
          >
            <Text as="span" color="green">
              1
            </Text>
            <Text as="p" variant="subtitle">
              <strong>
                A group of teens, many beginners, gather to start coding.
              </strong>
              The leader (that’s you!) presents for a few minutes, getting the
              group started building something new.
            </Text>
            <Text as="span" color="cyan">
              2
            </Text>
            <Text as="p" variant="subtitle">
              <strong>Everyone gets hacking, individually.</strong> Not hacking
              bank accounts, being creative and <a>making something awesome</a>.
            </Text>
            <Text as="span" color="blue">
              3
            </Text>
            <Text as="p" variant="subtitle">
              <strong>To end, everyone demos their work.</strong>
              As a leader, you’re cultivating a community of makers. Each member
              showing off their work builds momentum & motivation.
            </Text>
          </Grid>
        </Grid>
        <Grid
          columns={[null, '1fr 2fr']}
          mt={[3, 5]}
          sx={{ maxWidth: 'copyUltra', mx: 'auto' }}
        >
          <Heading as="h3" variant="headline" sx={{ fontSize: [4, 5], mb: 0 }}>
            Go beyond club meetings.
          </Heading>
          <Text
            as="p"
            variant="lead"
            sx={{ mt: 0, a: { variant: 'styles.a', color: 'blue' } }}
          >
            Hack Clubs attend and run{' '}
            <a href="https://hackathons.hackclub.com/">hackathons</a> like{' '}
            <a href="https://windyhacks.com">Windy&nbsp;City&nbsp;Hacks</a> &{' '}
            <a href="https://www.sfchronicle.com/bayarea/article/Hack-the-Fog-makes-history-as-San-12729895.php">
              Hack the Fog
            </a>
            , run summer programs like{' '}
            <a href="https://web.archive.org/web/20200808171549/http://thecspn.com/?p=43434">Hack Camp</a>, and compete in
            events like the{' '}
            <a href="http://www.congressionalappchallenge.us">
              Congressional App Challenge
            </a>
            . The&nbsp;hack’s the limit.
          </Text>
        </Grid>
      </Container>
    </Box>
    <Box
      as="section"
      sx={{
        py: 6,
        bg: 'dark',
        color: 'white',
        'h2,p': { textShadow: 'text' },
        textAlign: [null, 'center'],
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <BGImg
        src="/golden-train.png"
        width={2048}
        height={1170}
        alt="Hack Clubbers on the 2021 Hacker Zephyr"
      />
      <Container>
        <Text as="p" variant="eyebrow" sx={{ color: 'white', opacity: 0.75 }}>
          ~ Philosophy ~
        </Text>
        <Heading as="h2" variant="title">
          By the students, for the students.
        </Heading>
        <Text as="p" variant="lead" sx={{ maxWidth: 'copyPlus', mx: 'auto' }}>
          Learning to code is like gaining a superpower — turning you
          from a consumer of technology into a creator. It shouldn’t be
          taught like a class — it should be a creative, inclusive space. To
          foster this environment,{' '}
          <Highlight>every&nbsp;Hack&nbsp;Club is student-led</Highlight> &
          members make self-directed projects.
        </Text>
        <Button
          as="a"
          href="https://hackclub.com/philosophy/"
          variant="ctaLg"
          sx={{
            background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)'
          }}
        >
          Our philosophy →
        </Button>
      </Container>
    </Box>
    <Box as="section" sx={{ py: [4, 5, 6], color: 'black' }}>
      <Container
        sx={{
          maxWidth: [null, 'copyUltra'],
          svg: { filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.125))' }
        }}
      >
        <Box as="header" sx={{ textAlign: [null, 'center'], pb: [4, 5] }}>
          <Text as="p" variant="eyebrow">
            Hit the ground running
          </Text>
          <Heading as="h2" variant="title">
            Get your club{' '}
            <Text
              as="span"
              sx={{
                borderRadius: 'default',
                px: 2,
                mx: [-2, 0],
                bg: 'rgb(91, 255, 205)',
                color: '#095365',
                display: 'inline-block',
                whiteSpace: 'nowrap'
              }}
            >
              going & growing
            </Text>
            with Hack&nbsp;Club.
          </Heading>
        </Box>
        <Grid
          columns={[null, 2]}
          gap={[2, 4]}
          sx={{ alignItems: 'end', span: { color: 'white' } }}
        >
          <Feature
            icon="slack-fill"
            color="#5d114c"
            name="Chats with 100s of club leaders"
            desc={
              <>
                In our{' '}
                <Link href="/slack" passHref>
                  <a>Slack community</a>
                </Link>{' '}
                of 10k+ teen hackers, you’ll join a private space for
                Hack&nbsp;Club leaders to ask questions & chat, share projects,
                & attend weekly live events.
              </>
            }
          />
          <Feature
            icon="docs"
            color="red"
            name="Meeting content"
            desc={
              <>
                Come prepared to every meeting with over 100{' '}
                <a href="https://workshops.hackclub.com">workshops</a> (3 years’ 
                worth!) that guide your club members through making fun, creative projects.
              </>
            }
          >
            <Photo
              src="/home/flagship_megan.png"
              alt="Megan presenting a workshop at Flagship 2019"
              width={980}
              height={653}
              sx={{ maxWidth: [null, 332] }}
            />
          </Feature>
          {/* <Feature
            name="A comprehensive leader guide"
            desc={
              <>
                Need help getting started? Watch real club leaders run meetings, and
                learn how to run them in your own club, with{' '}
                <a href="https://meetings.hackclub.com">Hack Club Meetings</a>.
              </>
            }
          >
            <Photo
              src="/home/meetings.png"
              alt="Claire running a workshop on Generative Art in an online meeting"
              width={1000}
              height={653}
              sx={{ maxWidth: [null, 332] }}
            />
          </Feature> */}
          <Feature
            name="Stickers"
            desc={
              <>
                Get{' '}
                <Link href="/stickers">
                  <a>amazing stickers </a>
                </Link>{' '}
                for marketing your club shipped directly to you & your
                club members.
              </>
            }
            sx={{
              img: { mr: 4, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' }
            }}
          >
            <Image
              src="https://hackclub.com/stickers/macintosh.svg"
              alt="Macintosh sticker"
              sx={{
                transform: 'rotate(-12deg)',
                width: '4.5rem',
                height: '6rem'
              }}
            />
            <Image
              src="https://hackclub.com/stickers/2020_progress.png"
              alt="Pride sticker"
              sx={{
                transform: 'rotate(3deg)',
                width: ['4rem', '6rem'],
                height: ['4rem', '6rem'],
                borderRadius: 'extra'
              }}
            />
            <Image
              src="https://hackclub.com/stickers/enjoy.svg"
              alt="Enjoy Hack Club Coca-Cola sticker"
              sx={{
                transform: 'rotate(-12deg)',
                width: ['6rem', '8rem'],
                height: ['4rem', '5rem']
              }}
            />
          </Feature>
          <Feature
            icon="bank-account"
            color="muted"
            name="A nonprofit bank account"
            desc={
              <>
                Use our 501(c)(3) status (US-only) and a club bank account with{' '}
                <a href="https://hackclub.com/bank/">Hack Club Bank</a>.
                Fundraise, accept donations, buy things!
              </>
            }
          >
            <Image
              src="/home/hackClubBank.png"
              alt="Screenshot of Hack Club Bank on a MacBook"
              width={256}
              loading="lazy"
            />
          </Feature>
          <Feature
            name="Weekly events"
            desc={
              <>
                From{' '}
                <Link href="/night">
                  <a>Hack Night</a>
                </Link>{' '}
                to{' '}
                <Link href="/amas">
                  <a>AMAs</a>
                </Link>
                {' to '}
                <a href="https://twitter.com/hackclub/status/1300494921997193217?s=21">
                  weirder events
                </a>
                , the Slack community has live events for leaders & members
                alike every week.
              </>
            }
          >
            <Photo
              src="/home/workshops.jpg"
              alt="Students going wild on a Zoom call"
              width={768}
              height={463}
              sx={{ maxWidth: [null, 332] }}
            />
          </Feature>
          <Feature
            icon="purse"
            color="orange"
            name="A basket of free tools"
            desc={
              <>
                Free subscriptions to Notion Pro, Figma Pro, repl.it and more
                for running a great club.
              </>
            }
          />
          {/* <Feature
            icon="sam"
            color="blue"
            name="Free Zoom Pro"
            desc="24/7 access to Zoom Pro enabled meeting rooms for your club (that means no time limit)."
          /> */}
        </Grid>
        <Feature
          icon="welcome"
          color="rgb(255,88,88)"
          name="Existing clubs welcome."
          desc={
            <>
              When established CS clubs join, they get all the Hack&nbsp;Club
              benefits: Zoom&nbsp;Pro, stickers, our Slack community,{' '}
              <a href="https://workshops.hackclub.com/">workshops</a>, the
              works. They’re welcome to use the “Hack&nbsp;Club” name or keep
              their existing one.
            </>
          }
          as="aside"
          sx={{
            display: 'grid',
            gridGap: [0, 4],
            gridTemplateColumns: [null, 'auto 1fr'],
            alignItems: 'start',
            justifyContent: 'start',
            bg: 'rgba(255,88,88,0.125)',
            mt: [4, 5],
            p: [3, 4],
            borderRadius: 'extra',
            span: { transform: 'none', width: 'min-intrinsic' },
            svg: { color: 'white' }
          }}
        />
      </Container>
    </Box>
    <Footer
      dark
      sx={{
        backgroundColor: 'dark',
        position: 'relative',
        overflow: 'hidden',
        textShadow: '0 1px 2px rgba(0,0,0,0.375)',
        'h2,span,p,a': { color: 'white !important' },
        '> div img': { objectPosition: ['left', 'center'] },
        svg: {
          fill: 'white',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))'
        }
      }}
    >
      <BGImg
        width={2544}
        height={2048}
        gradient="linear-gradient(rgba(0,0,0,0.125), rgba(0,0,0,0.25))"
        src="/home/footer.png"
        alt="Globe with hundreds of Hack Clubs"
      />
    </Footer>
  </>
)

export default Page
