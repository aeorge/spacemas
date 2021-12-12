import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import logo from '../public/logo.png'
import teaser from '../public/teaser.png'
import happyGoat from '../public/happy-goat.gif'

const data = {
  teams: [
    {
      name: 'Team A',
      color: '',
      points: 0,
      members: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        }
      ]
    },
    {
      name: 'Team B',
      color: '',
      points: 0,
      members: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        }
      ]
    },
    {
      name: 'Team C',
      color: '',
      points: 0,
      members: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        }
      ]
    },
    {
      name: 'Team D',
      color: '',
      points: 0,
      members: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        }
      ]
    },
    {
      name: 'Team E',
      color: '',
      points: 0,
      members: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/spacemas-2021.appspot.com/o/team%2Fgeorge.png?alt=media&token=266b0d17-9b67-46e0-84a0-1098444bd0f5'
        }
      ]
    }
  ]
}

const Home: NextPage = () => {
  return (
    <div className='container px-2 mx-auto my-12 space-y-12 text-center sm:px-4 sm:my-24 sm:space-y-24'>
      <Head>
        <title>SPACEMAS 2021</title>
        <meta name='description' content='SPACEMAS 2021' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='space-y-2 sm:space-y-4'>
        <Image
          src={logo}
          alt='SPACEGOATS Logo'
          width={150}
          height={128}
          priority
        />
        <h1 className='mx-auto text-4xl font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600 sm:text-6xl'>
          SPACEMAS 2021
        </h1>
        <div className='mx-auto text-xl text-gray-200 w-fit sm:text-3xl'>
          17.12.2021
        </div>
      </header>

      <main className='space-y-12 sm:space-y-24'>
        <div className='space-y-4 sm:space-y-8'>
          {/* TODO Replace text */}
          <p className='text-lg sm:text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt?
          </p>
          <div className='inline-flex overflow-hidden border-2 border-pink-400 shadow-2xl shadow-pink-400/75 rounded-2xl sm:border-4'>
            <Image
              src={teaser}
              alt='Ruben and Ben present SPACEMAS 2021'
              width={1200}
              height={614}
              placeholder='blur'
            />
          </div>
          {/* TODO Replace text */}
          <p className='text-lg sm:text-2xl'>Lorem ipsum dolor sit amet.</p>
        </div>

        <section className='space-y-4 sm:space-y-8'>
          <h2 className='text-2xl font-bold uppercase sm:text-4xl'>Agenda</h2>
          {/* TODO Replace text */}
          <p className='text-base sm:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            officiis, nulla ducimus velit accusamus quidem dolores dignissimos
            harum, perferendis assumenda quos corporis explicabo ut dicta
            tempore aut mollitia sapiente suscipit. Nesciunt, aut quis veritatis
            aliquid voluptatum velit natus tempore unde. Similique deleniti
            perspiciatis possimus officiis reprehenderit saepe eveniet veniam
            labore?
          </p>
        </section>

        <section className='space-y-4 sm:space-y-8'>
          <h2 className='text-2xl font-bold uppercase sm:text-4xl'>Teams</h2>
          {data?.teams?.length ? (
            <ul className='space-y-8'>
              {data?.teams?.map((team, index) => (
                <li className='space-y-2 sm:space-y-4' key={index}>
                  <h3 className='text-xl sm:text-3xl'>{team.name}</h3>
                  <ul className='flex flex-wrap justify-center gap-2 sm:gap-4'>
                    {team.members?.map((member, index) => (
                      <li
                        // TODO Fix dynamic border and background color
                        className='overflow-hidden border-2 rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]'
                        key={index}
                      >
                        <Image
                          src={member.url}
                          alt={`Team Member ${index + 1}`}
                          width={150}
                          height={150}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-base text-gray-200 sm:text-xl'>
              The teams have not yet been decided.
            </p>
          )}
        </section>

        <section className='space-y-4 sm:space-y-8'>
          <h2 className='text-2xl font-bold uppercase sm:text-4xl'>
            Leaderboard
          </h2>
          {data?.teams?.length ? (
            <ol className='inline-flex flex-col w-full p-4 space-y-3 lg:w-2/3 lg:p-8 lg:space-y-6'>
              {[...data?.teams]
                .sort((a, b) => b.points - a.points)
                .map((team, index) => (
                  <li className='space-y-2 sm:space-y-4' key={index}>
                    <div className='flex space-x-2 text-xl sm:text-3xl'>
                      <span>{team.name}</span>
                      <span>({team.points})</span>
                    </div>
                    <progress className='w-full' max={20} value={team.points}>
                      {team.points}
                    </progress>
                  </li>
                ))}
            </ol>
          ) : (
            <p className='text-base text-gray-200 sm:text-xl'>
              The games did not start yet.
            </p>
          )}
        </section>

        <section className='space-y-4 sm:space-y-8'>
          <h2 className='text-2xl font-bold text-yellow-400 uppercase sm:text-4xl'>
            Sponsors
          </h2>
          <ul className='space-y-8'>
            <li className='space-y-1 sm:space-y-2'>
              <div className='text-xl font-bold sm:text-3xl'>Yuyuicery</div>
              <div className='text-lg italic text-gray-200 sm:text-2xl'>
                Your #1 SPACEGOATS food supplier
              </div>
            </li>
            <li className='space-y-1 sm:space-y-2'>
              <div className='text-xl font-bold sm:text-3xl'>Dolce Mari</div>
              <div className='text-lg italic text-gray-200 sm:text-2xl'>
                Where everything is ready for remission
              </div>
            </li>
            <li className='space-y-1 sm:space-y-2'>
              <div className='text-xl font-bold sm:text-3xl'>Krebbet</div>
              <div className='text-lg italic text-gray-200 sm:text-2xl'>
                Win and get limited
              </div>
            </li>
            <li className='space-y-1 sm:space-y-2'>
              <div className='text-xl font-bold sm:text-3xl'>AMZ*ucklete</div>
              <div className='text-lg italic text-gray-200 sm:text-2xl'>
                Start here, end at SPACEGOATS
              </div>
            </li>
          </ul>
          <div className='text-base text-gray-400 sm:text-xl'>
            <p>
              You want to see the name of your company on this list at the next
              event?
            </p>
            <p>Please contact the organizer.</p>
            <p className='text-sm text-gray-600 sm:text-base'>
              * Payment only in DOGE.
            </p>
          </div>
        </section>
      </main>

      <hr className='border-2 border-gray-600 rounded-full' />

      <footer className='space-y-2 sm:space-y-4'>
        <h2 className='w-full mx-auto text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600 lg:w-2/3 lg:text-5xl lg:leading-[3.75rem]'>
          SPACEGOATS wishes you a wonderful holiday season and a happy New Year!
        </h2>
        <div>
          <Image src={happyGoat} alt='Happy goat dancing' />
        </div>
      </footer>
    </div>
  )
}

export default Home
