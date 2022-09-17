import { useState, useEffect } from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';

import { GameBanner } from '../components/GameBanner';
import { CreateAdBanner } from '../components/CreateAdBanner';
import { CreateAdModal } from '../components/CreateAdModal';

import logoImg from '../assets/logo-nlw-esports.svg';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function Home() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('https://nlw-esports-server.fly.dev/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto px-3 flex flex-col items-center sm:my-20 my-10">
      <img className="sm:block hidden" src={logoImg} alt="" />

      <h1 className="text-6xl text-center text-white font-black sm:mt-20 mt-0">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-6 mt-16">
        { games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        }) }
      </div>

       <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default Home