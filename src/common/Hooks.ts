import {useEffect} from 'react';

export const useOnDocumentClick = (element, onClickOutside) => {
    useEffect(() => {

        if (!element) return;

        const onDocumentClick = (e: MouseEvent) => {
            if (!(e.target instanceof Node)) return;

            if (element.contains(e.target)) {
                return;
            }

            onClickOutside()
        }

        document.addEventListener('click', onDocumentClick)

        return () => {
            document.removeEventListener('click', onDocumentClick)
        }
    })
}
