import Dashboard from "@/components/dashboard/dashboard";
import {fetchAreas} from "@/infrastructure/areas.infra";
import {fetchUAVs} from "@/infrastructure/uavs.infra";
import {fetchParams} from "@/infrastructure/params.infra";
import MqttWrapper from "@/components/mqttWrapper/MqttWrapper";


export const revalidate = 0

export default async function Home() {

  // fetch broker data
  // fetch UAVs
  // fetch areas


  const paramsData = await fetchParams();
  const UAVsData = await fetchUAVs();
  const areasData = await fetchAreas();


  return (
    <Dashboard params={paramsData.params} UAVs={UAVsData.UAVs} areas={areasData.areas}/>
  );
}
