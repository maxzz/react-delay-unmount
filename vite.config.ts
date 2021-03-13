import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/

export default ({ mode, command }: { mode: string, command: string }) => {
    //console.log(`mode: ${mode}, command: ${command}`); // mode: development, command: serve

    let commonConfig = defineConfig({
        plugins: [reactRefresh()]
    });

    if (command === 'build') {
        commonConfig = defineConfig({
            ...commonConfig,
            base: '/react-delay-unmount/',
        });
    }
    
    return commonConfig;
}
