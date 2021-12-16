import { useEffect, useState } from 'react'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage
} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { google } from 'googleapis'
import Snowfall from 'react-snowfall'
import { Team, TeamColor } from '../types'
import { backgroundColor, borderColor, textColor } from '../utils/colors'

import santaGoat from '../public/santa-goat.png'
import teaser from '../public/teaser.png'
import closedSign from '../public/closed-sign.png'
import coinSpin from '../public/coin-spin.gif'
import happyGoat from '../public/happy-goat.gif'

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  ({ teams }) => {
    const [mounted, setMounted] = useState<boolean>(false)
    const [snowColor, setSnowColor] = useState<TeamColor | 'white'>('white')

    useEffect(() => {
      setMounted(true)
    }, [])

    useEffect(() => {
      const maxPoints = Math.max(...teams.map((team) => team.points))
      const leadingTeams = teams.filter((team) => team.points === maxPoints)
      if (leadingTeams.length === 1) {
        setSnowColor(leadingTeams[0].color)
      } else {
        setSnowColor('white')
      }
    }, [teams])

    return (
      <>
        {mounted ? (
          <Snowfall
            color={snowColor}
            snowflakeCount={250}
            style={{ zIndex: 9999 }}
          />
        ) : null}
        <div className='container px-2 py-12 mx-auto space-y-12 text-center sm:px-4 sm:py-24 sm:space-y-24'>
          <Head>
            <title>SPACEMAS 2021</title>
            <meta name='description' content='SPACEMAS 2021' />
            <link rel='icon' href='/favicon/favicon.ico' />
          </Head>

          <header className='space-y-2 sm:space-y-4'>
            <Image
              src={santaGoat}
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
              <p className='mx-auto text-lg sm:w-2/3 sm:text-2xl'>
                It is time for the annual remote Christmas party! Let us enjoy
                the evening and have a great time together!
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
              <p className='mx-auto text-lg sm:w-2/3 sm:text-2xl'>
                Ruben Astorpflaume & Benjamin Gottschabend present to you:{' '}
                <span className='font-bold text-yellow-400 whitespace-nowrap'>
                  ✨ SPACEMAS 2021! ✨
                </span>
              </p>
            </div>

            <section className='space-y-4 sm:space-y-8'>
              <h2 className='text-2xl font-bold uppercase sm:text-4xl'>
                Agenda
              </h2>
              {/* TODO Replace text */}
              <p className='text-base sm:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                officiis, nulla ducimus velit accusamus quidem dolores
                dignissimos harum, perferendis assumenda quos corporis explicabo
                ut dicta tempore aut mollitia sapiente suscipit. Nesciunt, aut
                quis veritatis aliquid voluptatum velit natus tempore unde.
                Similique deleniti perspiciatis possimus officiis reprehenderit
                saepe eveniet veniam labore?
              </p>
            </section>

            <section className='space-y-4 sm:space-y-8'>
              <h2 className='text-2xl font-bold uppercase sm:text-4xl'>
                Teams
              </h2>
              {teams.length ? (
                <ul className='space-y-8'>
                  {teams.map((team, index) => (
                    <li className='space-y-2 sm:space-y-4' key={index}>
                      <h3
                        className={`text-xl font-bold sm:text-3xl ${
                          textColor[team.color]
                        }`}
                      >
                        {team.name}
                      </h3>
                      <ul className='flex flex-wrap justify-center gap-2 sm:gap-4'>
                        {team.members.map((member, index) => (
                          <li
                            className={`flex items-center justify-center overflow-hidden border-4 rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] ${
                              borderColor[team.color]
                            } ${backgroundColor[team.color]}`}
                            key={index}
                          >
                            {member.url ? (
                              <Image
                                src={member.url}
                                alt={`Team Member ${index + 1}`}
                                width={150}
                                height={150}
                              />
                            ) : (
                              <span className='text-4xl sm:text-6xl'>?</span>
                            )}
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
              {teams.length ? (
                <ol className='inline-flex flex-col w-full p-4 space-y-3 lg:w-2/3 lg:p-8 lg:space-y-6'>
                  {[...teams]
                    .sort((a, b) => b.points - a.points)
                    .map((team, index) => (
                      <li className='space-y-2 sm:space-y-4' key={index}>
                        <h3
                          className={`flex space-x-2 text-xl font-bold sm:text-3xl ${
                            textColor[team.color]
                          }`}
                        >
                          <span>{team.name}</span>
                          <span>({team.points})</span>
                        </h3>
                        <progress
                          className='w-full'
                          max={20}
                          value={team.points}
                        >
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
              <div>
                <h2 className='text-2xl font-bold uppercase sm:text-4xl'>
                  Live Bets
                </h2>
                <p className='text-base text-gray-400 sm:text-xl'>by Krebbet</p>
              </div>
              <div>
                <Image
                  src={closedSign}
                  alt='Closed sign'
                  width={138}
                  height={80}
                  placeholder='blur'
                />
              </div>
              <p className='text-lg sm:text-2xl'>
                Due to a case of illness in the team,
                <br />
                the casino must unfortunately remain closed today.
              </p>
            </section>

            <section className='space-y-4 sm:space-y-8'>
              <div className='flex items-center justify-center'>
                <Image
                  src={coinSpin}
                  alt='Spinning coin'
                  width={40}
                  height={40}
                />
                <h2 className='text-2xl font-bold text-yellow-400 uppercase sm:text-4xl'>
                  Sponsors
                </h2>
                <Image
                  src={coinSpin}
                  alt='Spinning coin'
                  width={40}
                  height={40}
                />
              </div>
              <ul className='space-y-8'>
                <li className='space-y-1 sm:space-y-2'>
                  <div className='text-xl font-bold sm:text-3xl'>Yuyuicery</div>
                  <div className='text-lg italic text-gray-200 sm:text-2xl'>
                    Your #1 SPACEGOATS food supplier
                  </div>
                </li>
                <li className='space-y-1 sm:space-y-2'>
                  <div className='text-xl font-bold sm:text-3xl'>
                    Dolce Mari
                  </div>
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
                  <div className='text-xl font-bold sm:text-3xl'>
                    AMZ*ucklete
                  </div>
                  <div className='text-lg italic text-gray-200 sm:text-2xl'>
                    Start here, end at SPACEGOATS
                  </div>
                </li>
              </ul>
              <div className='text-base text-gray-400 sm:text-xl'>
                <p>
                  You want to see the name of your company on this list at the
                  next event?
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
              SPACEGOATS wishes you a wonderful holiday season and a happy New
              Year!
            </h2>
            <div>
              <Image src={happyGoat} alt='Happy goat dancing' />
            </div>
          </footer>
        </div>
      </>
    )
  }

export const getServerSideProps: GetServerSideProps<{ teams: Team[] }> =
  async () => {
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          client_id: process.env.GOOGLE_CLIENT_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
      })

      const sheets = google.sheets({
        auth,
        version: 'v4'
      })

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: 'Teams!A:E',
        majorDimension: 'COLUMNS'
      })

      if (response.status !== 200) {
        throw new Error(response.statusText)
      }

      const data = response.data.values

      if (!data) {
        throw new Error('No data found.')
      }

      const teams = data.reduce<Team[]>((previousValue, currentValue) => {
        return [
          ...previousValue,
          {
            name: currentValue[0],
            color: currentValue[1],
            points: +currentValue[2],
            members: currentValue.slice(3).map((url) => ({ url: url }))
          }
        ]
      }, [])

      return {
        props: {
          teams
        }
      }
    } catch (error: any) {
      console.error(error)
      throw new Error()
    }
  }

export default Home
