import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaTiktok, FaTwitch, FaYoutube } from "react-icons/fa";

export const metadata = {
 title: 'edCanDev',
 description: 'edCanDev',
};



export default function Home() {
  
  const links = [
    { id: 1, link: 'https://www.instagram.com/edcandev/', label: 'Instagram', icon: <FaInstagram size={ 40 } /> },
    { id: 2, link: 'https://www.twitch.tv/edcandev', label: 'Twitch', icon: <FaTwitch size={ 40 } /> },
    { id: 3, link: 'https://www.tiktok.com/@edcandev', label: 'TikTok', icon: <FaTiktok  size={ 40 } /> },
    {
      id: 4,
      link: 'https://www.youtube.com/@edcandev',
      label: 'YouTube',
      icon: <FaYoutube size={ 40 } />
    },
    {
      id: 5,
      link: 'https://discord.gg/nAMBaqZd',
      label: 'Discord',
      icon: <FaDiscord size={ 40 } />
    }
  ]

  return (
    <main className="min-h-screen bg-slate-900">

      <header className='w-full flex justify-center items-center pt-8 mb-16 flex-col'>
        <Image src={'/me.jpg'} alt="me" width={ 200 } height={ 200 } className="mb-4 rounded-full" />

        <h1 className="text-4xl mb-4"> edCanDev </h1>

        <div className="flex flex-col justify-center items-center text-xl">

          <h3 className="italic">Full-Stack Software Engineer</h3>
        </div>

      </header>

      <section className="max-w-[350px] m-auto flex flex-col">

        {
          links.map( ({ id, label, link, icon }) => (
            <Link
            key={ id }
              href={link} target="_blank"
              className="text-xl p-4 bg-slate-800 rounded-full text-center mb-8 flex justify-start items-center transition-all hover:bg-slate-950"
            >
              { icon }
              <span className="pl-8 text-2xl">
                { label }
              </span>
            </Link>
          ))
        }


      </section>


    
    </main>
  );
}
