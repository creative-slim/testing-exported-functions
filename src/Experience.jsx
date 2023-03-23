import { MeshReflectorMaterial, OrbitControls, useGLTF, Clone, useAnimations } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect } from 'react'

export default function Experience() {
    const model = useGLTF("./hamburger-draco.glb")
    const fox = useGLTF("./Fox/glTF-Binary/Fox.glb")

    const animations = useAnimations(fox.animations, fox.scene)
    console.log("🚀 ~ Experience ~ animations:", animations)

    useEffect(() => {
        const action = animations.actions["Run"]
        action.play()
    })
    // const { animationName } = useControls({
    //     animationName: { options: animations.names }
    // })

    // useEffect(() => {
    //     const action = animations.actions[animationName]
    //     action
    //         .reset()
    //         .fadeIn(0.5)
    //         .play()

    //     return () => {
    //         action.fadeOut(0.5)
    //     }

    // }, [animationName])

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight
            castShadow
            position={[1, 2, 3]}
            intensity={1.5} />
        {/* <ambientLight
            intensity={0.5} /> */}

        <mesh
            receiveShadow
            position-y={- 1}
            rotation-x={- Math.PI * 0.5}
            scale={50}>
            <planeGeometry />
            <MeshReflectorMaterial color={"gray"} blur={[1000, 1000]} resolution={512} mixBlur={1} mirror={.75} />
        </mesh>

        <Clone object={model.scene} scale={0.35} />
        <Clone object={model.scene} scale={0.35} position-x={-4} />
        <Clone object={model.scene} scale={0.35} position-x={4} />
        <primitive object={fox.scene} scale={0.05} position-z={10} />

    </>
}