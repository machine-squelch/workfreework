import { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import { notFound } from 'next/navigation'

// Sample essays data - replace with CMS or markdown files in production
const essaysData: { [key: string]: any } = {
  'ai-didnt-take-your-job': {
    title: 'AI Didn\'t Take Your Job — Obsolescence Did',
    excerpt: 'Why blaming technology misses the point, and what really happened to work.',
    date: '2025-03-15',
    readTime: '8 min read',
    category: 'Economics',
    content: `
      <p>Every few years, a new wave of panic sweeps through the economy: "The robots are coming for our jobs!" This time, it's AI. Last time, it was automation. Before that, it was outsourcing. Before that, computers.</p>
      
      <p>But here's the uncomfortable truth: <strong>AI didn't take your job. Your job was already obsolete.</strong></p>
      
      <h2>The Myth of Job Stability</h2>
      
      <p>We've been sold a lie: that jobs are stable, permanent fixtures of the economy. That if we go to school, get a degree, and work hard, we'll have secure employment for decades.</p>
      
      <p>This was never true. It was a brief anomaly in human history—roughly 1950 to 1990 in the West—when union power, post-war economic expansion, and manufacturing dominance created an illusion of job security.</p>
      
      <p>The moment globalization and digital technology arrived, that era ended. Not because of a conspiracy, but because of simple economics: if a task can be done cheaper elsewhere (or by a machine), it will be.</p>
      
      <h2>What Really Happened</h2>
      
      <p>Your job didn't disappear because of AI. It disappeared because:</p>
      
      <ul>
        <li><strong>It was already repetitive.</strong> If 80% of your work can be described in a flowchart, it's automatable. AI just made the automation cheaper.</li>
        <li><strong>It was already commoditized.</strong> If your skills are widely available, employers will pay less for them or find alternatives.</li>
        <li><strong>It was never designed for humans.</strong> Most office jobs were created to manage information before computers existed. We're still doing 1960s workflows in 2025.</li>
      </ul>
      
      <h2>The Real Problem</h2>
      
      <p>The problem isn't AI. The problem is that we've tied survival—food, housing, healthcare—to employment. And employment is increasingly optional for corporations.</p>
      
      <p>This is why conversations about automation always feel dystopian. We're not afraid of machines doing work. We're afraid of losing our ability to survive.</p>
      
      <h2>What to Do About It</h2>
      
      <p>First, stop blaming technology. AI, automation, and software are tools. They're not good or evil—they're inevitable.</p>
      
      <p>Second, recognize that the employment contract is breaking down. Waiting for it to "come back" is a losing strategy.</p>
      
      <p>Third, start building alternatives:</p>
      
      <ul>
        <li>Automate your own work. If a task can be automated, automate it and keep the time savings.</li>
        <li>Build skills that can't be commoditized. Creativity, judgment, relationship-building, taste.</li>
        <li>Create alternative income streams. Digital products, services, micro-businesses.</li>
        <li>Advocate for policy changes. Universal basic income, worker ownership, right-to-disconnect laws.</li>
      </ul>
      
      <h2>The Opportunity</h2>
      
      <p>Here's the optimistic take: if AI can do the boring parts of your job, that's not a threat—it's liberation.</p>
      
      <p>The question isn't "Will AI take my job?" The question is "What will I do with my time when the boring parts are automated?"</p>
      
      <p>That's the future we should be building. Not one where we fight to keep pointless jobs, but one where automation frees us to do work that actually matters.</p>
    `,
  },
  'automation-is-a-human-right': {
    title: 'Automation Is a Human Right',
    excerpt: 'The moral case for letting machines do the boring stuff.',
    date: '2025-03-08',
    readTime: '6 min read',
    category: 'Policy',
    content: `
      <p>We've framed automation wrong. The conversation always centers on job loss, economic disruption, and inequality. While those are valid concerns, they miss the fundamental point:</p>
      
      <p><strong>Automation is a human right.</strong></p>
      
      <h2>The Right to Not Do Pointless Work</h2>
      
      <p>Humans have always automated. Agriculture automated hunting and gathering. The printing press automated manuscript copying. Dishwashers automated dish washing.</p>
      
      <p>Every time, some people worried about job loss. Every time, humanity moved on to do more interesting things.</p>
      
      <p>The difference now? We've built an economic system that punishes people for automating their own work.</p>
      
      <h2>Why This Matters</h2>
      
      <p>Consider the typical office worker. They spend hours each week on:</p>
      
      <ul>
        <li>Copying data between systems</li>
        <li>Writing repetitive emails</li>
        <li>Scheduling meetings</li>
        <li>Formatting documents</li>
        <li>Creating reports no one reads</li>
      </ul>
      
      <p>All of this can be automated. Should be automated. But here's the catch: if you automate your job and tell your employer, they'll either give you more work or lay you off.</p>
      
      <p>So people stay quiet. They automate in secret and spend their "saved" time looking busy. This is absurd.</p>
      
      <h2>The Moral Case</h2>
      
      <p>Every human should have the right to automate repetitive work and keep the time savings. This isn't radical—it's basic dignity.</p>
      
      <p>We don't force people to hand-wash clothes when washing machines exist. We don't require manual math when calculators exist. Why do we force people to do computer tasks that computers can do better?</p>
      
      <h2>What This Looks Like in Practice</h2>
      
      <p>A right to automation would mean:</p>
      
      <ul>
        <li><strong>Legal protection for automation.</strong> Workers can't be penalized for automating their own tasks.</li>
        <li><strong>Time ownership.</strong> If you automate work and finish in 20 hours instead of 40, the saved time is yours.</li>
        <li><strong>Access to tools.</strong> Companies must provide automation tools to employees, or allow them to use their own.</li>
        <li><strong>Shared gains.</strong> Productivity improvements from automation must be shared with workers, not just captured by shareholders.</li>
      </ul>
      
      <h2>The Counterarguments</h2>
      
      <p>"But companies pay for 40 hours of work!" Sure, but they pay for <em>output</em>, not time. If I can deliver the same output in 20 hours, that's a win for everyone.</p>
      
      <p>"This will cause unemployment!" Only in a system that ties survival to employment. Fix the system, not the symptom.</p>
      
      <p>"People will abuse it!" Some will. Most won't. This argument is used to justify every regressive policy. Don't let it win here.</p>
      
      <h2>The Path Forward</h2>
      
      <p>We need policy changes. A right to automation should be enshrined in labor law. But we don't have to wait.</p>
      
      <p>Start automating now. Keep your time. Build alternatives. And push for a world where automation serves humans, not the other way around.</p>
    `,
  },
  'work-is-a-19th-century-patch': {
    title: 'Work Is a 19th-Century Patch (And It’s Starting to Peel)',
    excerpt: 'Stop patching the 1800s model. Start upgrading to human-first work.',
    date: '2025-03-01',
    readTime: '7 min read',
    category: 'Manifesto',
    content: `
      <p>Once upon a time, steam engines were the hottest tech on Earth. Factories chugged, bosses shouted, and people measured their worth by how long they could stand without passing out. The work week was born—a neat little box to keep humans as predictable as machines.</p>

      <p>Fast-forward to the present. Algorithms decide your route to work. AI answers your emails. Your phone knows your mood swings. The machines have evolved, but we’re still acting like Dickens is our HR manager. We’re basically running Windows 1820 on quantum hardware.</p>

      <p><strong>Work isn’t a curse—it’s a duct-tape fix that’s overstayed its welcome.</strong> It was never meant to last this long. We keep patching the same system, slapping “productivity tools” and “wellness perks” on top like we’re decorating a collapsing factory wall. Spoiler: the paint’s not helping.</p>

      <p>If we built “work” from scratch today, it wouldn’t look like this corporate cosplay. We’d measure value by what we create, not how many hours we sit pretending to care in meetings that could’ve been a well-trained bot. Freedom would be the default setting, not a weekend feature.</p>

      <h2>But two ancient lies keep glitching the upgrade:</h2>

      <p><strong>Lie #1 — “You must work to deserve living.”</strong><br/>
      Wrong. You were already alive when you woke up. Congrats. The idea that existence needs a permission slip signed by labor is peak industrial brain rot.</p>

      <p><strong>Lie #2 — “If a machine does your job, you’ve failed.”</strong><br/>
      Please. If a bot can do your job, you’ve won the game. You’ve offloaded the boring part of being human. Now you get to use your brain for things like ideas, curiosity, or the sweet art of not burning out.</p>

      <h2>So what now? Peel off the patch and start rewiring.</h2>
      <ol>
        <li><strong>Find the patch.</strong> The task that drains your soul every week? That’s your relic. Mark it for deletion.</li>
        <li><strong>Automate it.</strong> Let a machine handle it. That’s literally its hobby.</li>
        <li><strong>Reclaim the time.</strong> Do something creative, weird, profitable, or just vaguely joyful.</li>
        <li><strong>Repeat</strong> until your life stops feeling like an Excel spreadsheet.</li>
      </ol>

      <p>You’re not rejecting work—you’re finally debugging it. The 19th-century model was designed to make humans fit machines. You’re alive in the era where machines can finally fit humans.</p>

      <p><strong>So stop patching. Start upgrading.</strong></p>

      <p>And if your boss asks what you’re doing, tell them it’s a system update.</p>
    `,
  },
}

// Generate static params for all essays
export async function generateStaticParams() {
  return Object.keys(essaysData).map((slug) => ({
    slug,
  }))
}

// Generate metadata for each essay
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const essay = essaysData[params.slug]
  
  if (!essay) {
    return {
      title: 'Essay Not Found - WorkFreeWork',
    }
  }

  return {
    title: `${essay.title} - WorkFreeWork`,
    description: essay.excerpt,
    openGraph: {
      title: essay.title,
      description: essay.excerpt,
      type: 'article',
      publishedTime: essay.date,
    },
  }
}

export default function EssayPage({ params }: { params: { slug: string } }) {
  const essay = essaysData[params.slug]

  if (!essay) {
    notFound()
  }

  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/essays" 
            className="text-white hover:underline mb-6 inline-block"
          >
            ← Back to Essays
          </Link>
          
          <div className="mb-4">
            <span className="inline-block bg-black text-white px-3 py-1 rounded text-sm font-semibold">
              {essay.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {essay.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-400">
            <span>
              {new Date(essay.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span>•</span>
            <span>{essay.readTime}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="paper-sheet p-6 md:p-10">
          <div
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75',
              color: '#1f2937',
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: essay.content }} />
          </div>
        </div>
      </article>

      {/* Share Section */}
      <section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-300">
        <p className="text-center text-gray-600 mb-4">Share this essay</p>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
            Twitter
          </button>
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
            LinkedIn
          </button>
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
            Copy Link
          </button>
        </div>
      </section>

      {/* Related Essays */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Related Essays</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(essaysData)
            .filter(([slug]) => slug !== params.slug)
            .slice(0, 3)
            .map(([slug, relatedEssay]) => (
              <Link key={slug} href={`/essays/${slug}`} className="group">
                <div className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-700">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-black transition-colors">
                    {relatedEssay.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{relatedEssay.excerpt}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enjoy This Essay?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get new essays like this in your inbox every week.
          </p>
          <EmailCapture 
            placeholder="Your email"
            buttonText="Subscribe"
            className="max-w-lg mx-auto"
          />
        </div>
      </section>
    </div>
  )
}

