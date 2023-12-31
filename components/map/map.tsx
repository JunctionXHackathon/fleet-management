import { MapContainer, Marker, Polygon, Popup, Rectangle, TileLayer, Tooltip, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react';
import AddArea from '../area/add.area';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet/dist/leaflet.css';
import { icon } from "leaflet";
import { Tables } from '@/lib/database.types';
import { IUAVPacket } from '@/types';
import MapInfo from './map.info';
import MapFilter from './map.filter';
import InfoModal from "@/components/modal/InfoModal";


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
        setIsAdd: (add: boolean) => void;
        isAdd: boolean;
        areas: Tables<"area">[] | undefined;
        uavs: Tables<"UAV">[] | undefined;
        uavsData: IUAVPacket[] | undefined;
}

export interface IFilter{
        armed: boolean,
        unarmed: boolean,
        forbidden: boolean,
        allowed: boolean
}

export default function Map({setIsAdd, isAdd, areas, uavs, uavsData} : IMap) {  


        const initialFilter : IFilter = {
                armed: true,
                unarmed: true,
                forbidden: true,
                allowed: true
        }

        const [filters, setFilters] = useState<IFilter>(initialFilter);

        const [bounds, setBounds] = useState<number[][]>([]);

        const rec: Rectangles[] = [];
        const [rectangles, setRectangles] = useState<Rectangles[]>([]);

        const markerIcon = icon({
                iconUrl: "/markerIcon.png",
                iconSize: [35, 43],
        })

        const armedIcon = icon({
                iconUrl: "/armedUav.png",
                iconSize: [35, 43],
        })

        function MyComponent() {
        const map =  useMapEvents({
                click(e) {
                        const latlng = [e.latlng.lat, e.latlng.lng];  
                        bounds.push(latlng)
                        setBounds(bounds)
                },
        });
        return null;
        }

  // show modal
  const [isShown, setIsShown] = useState(false);
  const [selectedUav, setSelectedUav] = useState(null)
  // selecting
  function handleMarkerClick(uav:any) {
        setSelectedUav(uav)
  }

  return (
        <>
        <MapInfo></MapInfo>
        <MapFilter filters={filters} setFilters={setFilters}></MapFilter>
   <AddArea isAdd={isAdd} setIsAdd={setIsAdd} setRectangles={setRectangles} rectangles={rectangles} bounds={bounds} setBounds={setBounds}></AddArea>
    <MapContainer className='h-full z-0 w-full' center={[-23.967,15.47]} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {isAdd && <MyComponent></MyComponent> }

        { areas && areas.map((rectangle, index) => {
                if (rectangle.is_forbidden == filters.forbidden || rectangle.is_forbidden != filters.allowed) {
                     return(
                        <Rectangle  key={index} bounds={JSON.parse(rectangle.vertices)} pathOptions={{ color: rectangle.is_forbidden? "red" : "green" }}>
                        <Tooltip direction="center" offset={[0, 10]} opacity={1} permanent>
                                {rectangle.name}
                        </Tooltip>
                          </Rectangle>
                     );
                }
                return null;
        
                })}
                        
                {uavsData &&
                        uavsData.map((uav, index) => {
                        if (uav.gps.lat && uav.gps.lon && (uav.status.armed == filters.armed || uav.status.armed != filters.unarmed)) {
                        return (
                                <Marker
                                key={index}
                                icon={uav.status.armed? armedIcon: markerIcon}
                                position={[uav.gps.lat, uav.gps.lon]}
                                eventHandlers={{
                                  click: () => {
                                    setIsShown(!isShown);
                                    handleMarkerClick(uav)
                                  },
                                }}
                                >
                                <Tooltip sticky>{uav.status.armed} {uav.deviceTopic}</Tooltip>
                                </Marker>
                        );
                        }
                        return null;
                })}
                
    </MapContainer>
    {isShown && (
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#0000006f] backdrop-blur-sm z-10">
          <InfoModal uav={selectedUav} onRemove={() => setIsShown(false)} />
        </div>
      )}
    </>
  )
}
