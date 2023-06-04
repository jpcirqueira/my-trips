'use client';
import Map from "./components/map";

export default function Home() {
  return (
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
  )
}
