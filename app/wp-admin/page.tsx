import LayoutMain from "@/components/LayoutMain";
import IpInfo from '@/components/ipinfo/IpInfo';

export default function WpAdmin () {
    return (
    <LayoutMain>
    <h1 className="unbounded centered-texts big-padding-top-desc">Protected section</h1>
    <IpInfo />
    </LayoutMain>
    )
};