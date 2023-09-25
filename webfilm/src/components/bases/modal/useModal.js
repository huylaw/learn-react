import { useState } from "react";

const useModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    // ẩn/hiện modal
    const toggle = () => {
        setIsVisible(!isVisible);
    }

    // trả về giá trị từ hook, component có thể truy cập vào isVisible và toggle
    return {
        isVisible, toggle,
    }
};

export default useModal;