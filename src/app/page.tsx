'use client';
import { InfoOutline } from '@styled-icons/evaicons-outline'
import { LinkWrapper } from "./components/link-wrapper";
import Map from "./components/map";

export default function Home() {
  return (
    <>
        <LinkWrapper href="/about">
            <InfoOutline size={32} aria-label='About'/>
        </LinkWrapper>
        <Map 
            places={[
                {
                    id: '1',
                    name: 'Petrópolis',
                    slug: 'petropolis',
                    location: {
                    latitude: 0,
                    longitude: 0
                    }
                },
                {
                    id: '2',
                    name: 'Reykjavik',
                    slug: 'reykjavik',
                    location: {
                    latitude: -15,
                    longitude: -50,
                    }
                }
            ]}
        />
    </>
  )
}
