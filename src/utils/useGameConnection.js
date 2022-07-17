import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr"
import { useClientMethod, useHub, useHubMethod } from "react-use-signalr"

export const connection = new HubConnectionBuilder()
  .withUrl(process.env.REACT_APP_SIGNALR_API, {
    accessTokenFactory: () => localStorage.getItem("jwt")
  })
  .withAutomaticReconnect()
  .configureLogging(LogLevel.Information)
  .build()

export const useGameConnection = () => useHub(connection)

export const useGameAction = () => useHubMethod(connection, "SendMessage")

export const useGameStateChange = () =>
  useClientMethod(connection, "ReceiveMessage", (user, game) => {
    console.log({ user, game })
  })

export const useGameStateConnect = () =>
  useClientMethod(connection, "connected", (user, game) => {
    console.log("11111111111111" + { user, game })
  })
