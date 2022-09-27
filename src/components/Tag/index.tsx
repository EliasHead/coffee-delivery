import { TagContainer } from './styles'

export interface TagProps {
  text: string
}

export function Tag({ text }: TagProps) {
  return (
    <TagContainer>
      <span>{text}</span>
    </TagContainer>
  )
}
