import React from "react";
import {forAlert} from "../../type";

interface Props extends React.PropsWithChildren{
  customAlert: forAlert;
  onDismiss: React.MouseEventHandler;
}
const CustomAlert: React.FC<Props> = ({customAlert, onDismiss, children}) => {
  let closeAlert;
  if (customAlert.onDismiss) closeAlert = <button type={"button"} onClick={customAlert.onDismiss} className={"btn border border-0 bg-opacity-100"}>x</button>
  return (
    <div onClick={onDismiss} className={`alert alert-${customAlert.type} d-flex justify-content-between`} role="alert">
      {children || customAlert.children}
      {closeAlert}
    </div>
  );
};

export default CustomAlert;