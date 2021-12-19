import { BehaviorSubject, first, Observable, Subject } from 'rxjs';

export type TDialog = {
    component: JSX.Element;
    context: {
        close: (data: any) => void;
        data?: any;
    };
}

export type TOpenDialog = {
    afterClosed: Observable<any>;
}

export class DialogService {

    public showComponent$$ = new BehaviorSubject<TDialog | null>(null);
    public afterClosed$$ = new Subject();

    private close(data: any): void {
        this.afterClosed$$.next(data);
        this.showComponent$$.next(null);
    }

    public open(component: JSX.Element, data: any): TOpenDialog {
        const close = (data: any) => {
            this.close(data);
        }

        const newDialog = {
            component,
            context: {
                close,
                ...(data ? data : false)
            }
        }

        this.showComponent$$.next(newDialog);
        return { afterClosed: this.afterClosed$$.pipe(first()) }
    }

}

export const dialog = new DialogService();
