import { AppLayout } from './components/ui/Layout/AppLayout'
import { AppContainer } from './components/ui/Layout/AppContainer'
import { AppBar } from './components/ui/AppBar/AppBar'
import { Sidebar } from './components/ui/Sidebar/Sidebar'
import { Chat } from './components/ui/Chat/Chat'
import { andrzejekMessages } from './data/andrzejekMessagesData'

function App() {
  return (
    <AppContainer>
      <AppLayout appBar={<AppBar/>} navigation={<Sidebar/>}>
        <Chat title='Andrzejek Tate' messages={andrzejekMessages} />
      </AppLayout>
   </AppContainer>

  )
}

export default App