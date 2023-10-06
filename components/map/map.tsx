import { MapContainer, Marker, Polygon, Popup, Rectangle, TileLayer, Tooltip, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react';
import AddArea from '../area/add.area';
import supabase from '@/supabase';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet/dist/leaflet.css';
import { icon } from "leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

export interface IArea{
        id: number
        name: string,
        is_forbidden: boolean,
        max_altitude: number,
        min_altitude: number,
        vertices: string
}

interface Rectangles {
        id: number,
        bounds: number[][];
        color: string
}


interface IMap{
        setIsAdd: (add: boolean) => void,
        isAdd: boolean
}

const Map = ({setIsAdd, isAdd} : IMap) => {  

const [bounds, setBounds] = useState<number[][]>([]);

const [areas, setAreas] =  useState<IArea[]>([]);
const rec: Rectangles[] = [];
const [rectangles, setRectangles] = useState<Rectangles[]>([]);

useEffect(()=>{
        async function getAreas() {
        
                let { data, error } = await supabase
                .from('area')
                .select('*')

                if (data) {
                        setAreas(data)
                        console.log(data)
                        data.map((area, index) => {
                                rec.push({
                                        id: index,
                                        bounds: area.vertices,
                                        color: area.is_forbidden? 'red' : 'green'
                                      })
                        })
                        setRectangles(rec)
                        console.log(rectangles)
                }            
                        }
                        getAreas()

                        }, [])


  function MyComponent() {
    const map =  useMapEvents({
        click(e) {
                const latlng = [e.latlng.lat, e.latlng.lng];  
                bounds.push(latlng)
                setBounds(bounds)
                console.log(bounds)
        },
      });
    return null;
  }

  const markerIcon = icon({
        iconUrl: "/markerIcon.png",
        iconSize: [35, 43],
      })

const armedIcon = icon({
        iconUrl: "/armedUav.png",
        iconSize: [35, 43],
})

  return (
        <>
        <AddArea isAdd={isAdd} setIsAdd={setIsAdd} bounds={bounds} setBounds={setBounds} rectangles={rectangles} setRectangles={setRectangles}></AddArea>
    <MapContainer className='h-[90%] z-0 w-full' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {isAdd && <MyComponent></MyComponent> }

        {areas.map((rectangle, index) => (
         <Rectangle bounds={JSON.parse(rectangle.vertices)} pathOptions={{ color: rectangle.is_forbidden? "red" : "green" }}>
                <Tooltip direction="center" offset={[0, 10]} opacity={1} permanent>
                        {rectangle.name}
                </Tooltip>
        </Rectangle>
        ))}
      

      <Marker  
        icon={markerIcon}
        position={[51.505, -0.09]}>
                  <Tooltip sticky>UAV</Tooltip>
      </Marker>
      <Marker  
        icon={armedIcon}
        position={[51.500, -0.09]}>
                  <Tooltip sticky>
                      Armed UAV</Tooltip>
      </Marker>
    </MapContainer>
    </>
  )
}

export default Map
