import { InjectionToken } from "@angular/core";
import { ISnackbarManagerService } from "../services/isnackbar-manager.service";
import { IClientService } from "./api-client/clients/iclients.service";

export const SERVICES_TOKEN = {
    HTTP: {
        CLIENT: new InjectionToken<IClientService>('SERVICES_TOKEN.HTTP.CLIENT'),
      //  SCHEDULE: new InjectionToken<IScheduleService>('SERVICES_TOKEN.HTTP.SCHEDULE'),
    },
    SNACKBAR: new InjectionToken<ISnackbarManagerService>('SERVICES_TOKEN.SNACKBAR'),
   // DIALOG: new InjectionToken<IDialogManagerService>('SERVICES_TOKEN.DIALOG')
}