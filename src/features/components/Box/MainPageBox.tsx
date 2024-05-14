
interface IMainPageBox {
  title: string;
  description: string;
}
export const MainPageBox = (props:IMainPageBox) => {
  return(
    <div className="p-4 w-[30%] text-slate-900 bg-white rounded-ss-3xl rounded-ee-3xl flex flex-col">
      <h4 className="text-xl font-bold">{props.title}</h4>
      <p>
        {props.description}
      </p>
    </div>
  )
}