
interface IBaseContainer {
  className?: string;
  children?: any;
}
export const BaseContainer = (props: IBaseContainer) => {
  return(
    <div className={`w-full p-4 bg-white rounded-lg ${props.className || ''}`}>
      {props.children}
    </div>
  )
}