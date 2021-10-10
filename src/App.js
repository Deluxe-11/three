import out from '@/assets/out.glb';

import './index.scss';

export default function App() {
    return (
        <div className={'container'}>
            <model-viewer
                style={{width: '100%', height: '100%'}}
                src={out} alt="A 3D model of an astronaut" ar
                ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate
                camera-controls/>
        </div>
    )
}
