import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "src/components/Modal";
import {
    BookSelectors,
    setBookVisibility,
    setPreviewBook,
} from "src/redux/reducers/bookSlice";
import Book from "src/pages/Book";
const PreviewBookModal = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector(BookSelectors.getVisibleSelectedModal);
    const previewBook = useSelector(BookSelectors.getPreviewBook);

    const onClose = () => {
        dispatch(setPreviewBook(null));
        dispatch(setBookVisibility(false));
    };
    return (
        <Modal isVisible={isVisible} onClose={onClose}>

{/*        {previewBook ? (*/}
{/*            <Book book={previewBook}/>*/}
{/*) : null }*/}
    </Modal>
);
};

export default PreviewBookModal;