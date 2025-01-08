import { differenceInSeconds } from "date-fns";
import CryptoJS from "crypto-js";

export const getTestPageTitle = (title:string)=>{
    return title
    .split("-")
    .join(" ")
    .replace("%26", "&")
    .toUpperCase();
}

export const signOut = ()=>{
    localStorage.removeItem('profile')
}

export const calculateDifferenceInSeconds = (firstDate: Date, secondDate: Date) => {
    if (isNaN(secondDate?.getTime()) == false) {
      return differenceInSeconds(secondDate, firstDate);
    }
  };

export const getDurationInMinutesAndSeconds = (startDate:Date,endDate:Date)=>{
  const differenceInSeconds = calculateDifferenceInSeconds(
    startDate,
    endDate
  )!;
  const minutes = Math.floor(differenceInSeconds / 60);
  const seconds = differenceInSeconds % 60;
  const formattedDuration = `${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  return {
    minutes,
    seconds,
    formattedDuration
  }
}

export const getItemFromLocalStorage = (name:string)=>{
  const item = localStorage.getItem(name)
  return JSON.parse(item!)
}

const secretKey = "my-secret-key-1234";

export function encryptData(data:any) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}

export function decryptData(encryptedData:any) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}