import { Header } from "../../SharedModule";
import imgHader from "../../assets/Images/team.png";
export default function DashboardPage() {
  return (
    <>
      <Header
        title="Welcome "
        name="Abdelrhman"
        description="You can add project and assign tasks to your team"
        imgHader={imgHader}
      />
    </>
  );
}
