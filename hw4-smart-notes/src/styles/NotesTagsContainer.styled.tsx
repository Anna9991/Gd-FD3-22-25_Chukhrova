import styled from "styled-components"


export const NotesContainerStyled = styled('div')`
    padding: 20px 20px 10px 50px;
`;

export const NotesListContainerStyled = styled('div')`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 8px;
    overflow: scroll;
    max-height: 80vh;
    margin-top: 30px;
    padding-right: 15px;
`;

export const NoteContainerStyled = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #F2E9E4;
    border-radius: 5px;
`;

export const NoteContainerAddStyled = styled('div')`
    padding-bottom: 10px;
`;

export const TagsContainerStyled = styled('div')`
    padding: 20px 50px 10px 20px;
`;

export const TagsListContainerStyled = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    overflow: scroll;
    max-height: 80vh;
    margin-top: 30px;
    padding-right: 15px;
`;

export const TagContainerStyled = styled('div')`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #F2E9E4;
    border-radius: 5px;
`;