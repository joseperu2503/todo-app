import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show, toogleShow}){
    if(show){
        return (
            <div className="fixed top-0 right-0 bg-gray-500 bg-opacity-50 w-full h-full">
                <div className="w-full fixed top-1/2">
                    <div className="mx-auto max-w-sm w-11/12 bg-white h-40 rounded-lg p-4 flex flex-col justify-center items-center">
                        <p className="text-2xl">Hubo cambios!</p>
                        <button
                            className="py-2 px-3 text-white text-base rounded-md bg-blue-700 hover:bg-blue-600 mt-4"
                            onClick={toogleShow}
                        >   
                            <i className="fas fa-sync-alt mr-2"></i>
                            Volver a  cargar
                        </button>
                    </div>
                </div>
                
                
            </div>
        )
    }else{
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }