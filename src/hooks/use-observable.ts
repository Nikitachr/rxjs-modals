import { Observable } from 'rxjs';
import { useEffect, useState } from 'react';

function useObservable<T>(stream$: Observable<T>): T | null {
    const [state, setState] = useState<T | null>(null);

    useEffect(() => {
        const subscription = stream$.subscribe(res => setState(res));
        return () => {
            subscription.unsubscribe();
        }
    }, [stream$])

    return state;
}

export default useObservable;
