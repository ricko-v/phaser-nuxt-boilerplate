import Preloader from "../game/scene/preloader.js";

export default ({ app }, inject) => {
    const scene = {
        preloader: Preloader
    };

    inject('scene', scene);
}