import { device } from "lib/media-queries";
import styled from "styled-components";
import { Button, Icon, Separator } from "ui";
import { ColorProps, ModalContentProps } from ".";

export const SeparatorTopStyled = styled(Separator)`
  display: block;
  width: 100%;
  margin-bottom: 16px;
`;

export const ModalContentStyled = styled.div<ModalContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 32px;
  max-width: 500px;
  height: 500px;
`;

export const InformationWindowStyled = styled.div`
  max-width: 500px;
  height: 314px;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.textarea.disabled};
    border-radius: 10px;
    width: 6px;
    margin-bottom: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.modal.closeButton};
    border-radius: 10px;
  }
  ${device.tablet} {
    min-width: 500px;
  }
`;

export const ImportButtonStyled = styled(Button)`
  width: fit-content;
  padding: 0;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  aspect-ratio: 1 / 1;
  padding: 8px 12px;
  inline-size: 100px;
  font-size: 0.875em;
  overflow-wrap: break-word;
  cursor: pointer;

  input[type="file"] {
    display: none;
  }

  ${device.tablet} {
    padding: 16px 24px;
    font-size: 1.125em;
    inline-size: 150px;
  }
`;

export const IconStyled = styled(Icon)`
  font-size: 42px;

  ${device.tablet} {
    font-size: 64px;
  }
`;

export const SpinnerWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  height: 100%;
`;

export const PStyled = styled.p<ColorProps>`
  color: ${({ color }) => color};
  padding: 4px;
`;

export const LoadTutorialWrapperStyled = styled.div`
  color: ${({ theme }) => theme.main};
  font-weight: 600;
  font-size: 1em;

  ${device.tablet} {
    font-size: 1.125em;
  }
`;

export const SpanStyled = styled.span<ColorProps>`
  color: ${({ color }) => color};
`;
