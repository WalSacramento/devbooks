import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactHTMLParser from 'react-html-parser'
 
import { googleBooksApi } from '../../services/googleBooksApi'

import { Container, Content, Title, Subtitle, Description, BackButton } from './BookDatail.styles'
import { Thumbnail } from '../../components/Thumbnail'
import { ReactComponent as ArrowLeftIcon} from '../../icons/arrow-left.svg'

export interface BookState {
  id: string
  volumeInfo: {
    title: string
    subtitle: string
    description: string
    imageLinks?: {
      thumbnail: string
    }
  }
}

export function BookDatail() {
  const [book, setBook] = useState<BookState | null>(null)
  const params = useParams()
  const navigate = useNavigate()

  const { bookId } = params

  useEffect(() => {
    googleBooksApi
      .get(`/v1/volumes/${bookId}`)
      .then((response) => setBook(response.data))
  }, [bookId])

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Container>
      {book && (
        <>
          <BackButton onClick={handleGoBack}>
            <ArrowLeftIcon/>
          </BackButton>
          <Thumbnail
            thumbnail={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo.title}
            size="large"
            bgColor="#ef552b"
          />

          <Content>
            <Title>{book.volumeInfo.title}</Title>
            <Subtitle>{book.volumeInfo.subtitle}</Subtitle>
            <Description>{ReactHTMLParser(book.volumeInfo.description)}</Description>

          </Content>
        </>
      )}
    </Container>
  )
}
