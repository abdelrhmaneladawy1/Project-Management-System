export default function HeaderSection({ title }: { title: string }) {
  console.log(title);
  return (
    <div>
      <h6 className="text-white">Welcome to PMS</h6>
      <h4 className="header-title main-color ">{title}</h4>
    </div>
  );
}
