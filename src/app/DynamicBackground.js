import { useEffect, useRef } from 'react';

const DynamicBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl');

        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        // Vertex shader program
        const vertexShaderSource = `
            attribute vec4 a_position;
            void main() {
                gl_Position = a_position;
            }
        `;

        // Fragment shader program
        const fragmentShaderSource = `
            precision mediump float;
            uniform float u_time;
            uniform vec2 u_resolution;

            vec3 pastel(vec3 color, float factor) {
                return mix(color, vec3(1.0), factor);
            }

            void main() {
                vec2 st = gl_FragCoord.xy / u_resolution;
                float t = u_time * 0.1;

                vec3 color1 = pastel(vec3(0.0, 0.8, 0.4), 0.6);
                vec3 color2 = pastel(vec3(0.0, 0.5, 1.0), 0.6);
                vec3 color3 = pastel(vec3(0.8, 0.3, 0.5), 0.6);
                vec3 color4 = pastel(vec3(1.0, 0.7, 0.0), 0.7);
                vec3 color5 = pastel(vec3(0.5, 0.0, 0.5), 0.6);
                vec3 color6 = pastel(vec3(0.0, 0.8, 0.8), 0.6);

                vec3 color = mix(
                    mix(
                        mix(color1, color2, sin(st.x * 3.14159 + t) * 0.5 + 0.5),
                        mix(color3, color4, sin(st.y * 3.14159 + t * 1.2) * 0.5 + 0.5),
                        sin((st.x + st.y) * 3.14159 + t * 0.7) * 0.5 + 0.5
                    ),
                    mix(color5, color6, sin((st.x - st.y) * 3.14159 + t * 0.9) * 0.5 + 0.5),
                    sin((st.x * st.y) * 3.14159 + t * 0.8) * 0.5 + 0.5
                );

                gl_FragColor = vec4(color, 1.0);
            }
        `;

        const compileShader = (gl, type, source) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile failed with: ' + gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const createProgram = (gl, vertexShader, fragmentShader) => {
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error('Program failed to link: ' + gl.getProgramInfoLog(program));
                return null;
            }
            return program;
        };

        const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        const program = createProgram(gl, vertexShader, fragmentShader);

        const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
        const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
        const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [
            -1, -1,
            1, -1,
            -1, 1,
            -1, 1,
            1, -1,
            1, 1,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        const render = (time) => {
            time *= 0.001; // Convert to seconds

            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.useProgram(program);

            gl.enableVertexAttribArray(positionAttributeLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

            gl.uniform1f(timeUniformLocation, time);
            gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{
                position: 'absolute', // Fix the position
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -10, // Ensure it stays behind other content
                clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 70%)' // Adjust this to change the tilt
            }}
        />
    );
};

export default DynamicBackground;