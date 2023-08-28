'use client'

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer"
import PlayerContent from "./PlayerContent";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId)

    const songUrl = useLoadSongUrl(song!)

    if (!song || !songUrl || !player.activeId){
        // Dont load player if we dont have a song, song url, or active Id set
        return null
    }

    return (
        <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
            {/* Key used so that if user skips song we destroy playercontent and start fresh*/}
            <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
        </div>
    )
}

export default Player