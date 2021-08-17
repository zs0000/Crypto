import Head from 'next/head'
import Layout from '../components/common/Layout/layout'
import Container from '../components/common/Container/container'
import Intro from '../components/common/Intro/Intro'
import Test from '../components/common/Test/Test'
import Experts from '../components/common/Experts/Experts'
import Private from '../components/common/Private/Private'
import Talk from '../components/common/Talk/Talk'
import Offers from '../components/common/Offers/Offers'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Crypto Concepts - An Example Crypto Course Sales Funnel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Test/>
        <Intro 
        introtitle="Sentry Investing Group"
        introdescription="Crypto done simple. Join thousands of other traders, and gain access to Crypto and Industry Insiders."
        />
        <Experts
        expertisetitle="We're Here to Serve You"
        firstitemtitle="Lifes Too Busy"
        firstitemdescription="The best oppurtunities often times have narrow widows of entry, with potential short-term ROI dwindling as times goes on. Stop missing out on practically free money, and unlock financial freedom."
        seconditemtitle="Community of Researchers"
        seconditemdescription="Join Thousands of other investors in our Private Discord Community. We post realtime updates on top crypto news daily. Notifications are reserved for Urgent Updates."
        thirditemtitle="Realtime Signals"
        thirditemdescription="All of our packages include Realtime Signals, which are optional notifcations and text messages to notify our community the best times to potentially buy or sell."
        />
        <Private
        privatetitle="A Sea Of Resources"
        privatedescription="Powerful tools, always available, that make investing easy. Let Experts do the complex analysis, and receive simplified summaries daily."
        firstresource="Instant Networking"
        secondresource="Weekly Conferences"
        thirdresource="Daily Summaries"
        fourthresource="Direct Line To Experts"
        fifthresource="And Much More!"
        />
        <Talk 
        title="Community Testimonials"
        />
        <Offers />
      </Container>
    </Layout>
  )
}
