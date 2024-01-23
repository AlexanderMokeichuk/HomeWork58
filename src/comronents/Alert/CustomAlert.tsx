import React from "react";
import {forAlert} from "../../type";

interface Props extends React.PropsWithChildren{
  alert: forAlert;
}
const CustomAlert: React.FC<Props> = ({alert, children}) => {
  let closeAlert;
  if(alert.isActive) closeAlert = <button type={"button"} onClick={alert.onDismiss} className={"btn border border-0 bg-opacity-100"}>x</button>
  return (
    <div className={`alert alert-${alert.type} d-flex justify-content-between`} role="alert">
      {children || alert.children}
      {closeAlert}
    </div>
  );
};

export default CustomAlert;