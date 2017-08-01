import { SessionName } from '../enums/session.name';

export class SessionService{
    get<T>(sessionName: SessionName): T{
        return JSON.parse(localStorage.getItem(sessionName));
    }

    set<T>(sessionName: SessionName, value: T): void{
        let jsonObj: string = JSON.stringify(value);
        localStorage.setItem(sessionName, jsonObj);
    }

    clear(): void{
        localStorage.clear();
    }

    remove(sessionName: SessionName): void{
        localStorage.removeItem(sessionName);
    }
}