import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import { Header } from './components/Header'

export default function App() {
	return (
		<ChakraProvider theme={theme}>
			<Header />
		</ChakraProvider>
	)
}
