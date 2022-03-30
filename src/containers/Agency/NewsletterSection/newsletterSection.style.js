import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const NewsletterSectionWrapper = styled.section`
  padding: 80px 0;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 40px 0 60px 0;
  }
`;

const NewsletterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 488px;
  margin: 0 auto;
  @media (max-width: 575px) {
    flex-direction: column;
    max-width: 100%;
  }

  .reusecore__input {
    flex: 1;
    margin-right: 20px;
    @media (max-width: 575px) {
      margin: 0 0 20px 0;
      width: 100%;
    }
    .field-wrapper {
      input {
        min-height: 45px;
      }
    }
    &.is-material {
      label {
        font-size: 14px;
        top: 14px;
        font-weight: 500;
        color: rgba(51, 61, 72, 0.4);
      }
      &.is-focus {
        label {
          top: -12px;
        }
      }
    }
  }

  .reusecore__button {
    flex-shrink: 0;
    transition: all 0.3s ease;
    @media (max-width: 575px) {
      width: 100%;
    }
    &:hover {
      box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
    }
  }

  .mailchimp {

    width: 100%;

    input {
      font-size: 16px;
      padding: 11px;
      display: block;
      width: 100%;
      color: ${themeGet('colors.textColor', '#484848')};
      box-shadow: none;
      border-radius: 4px;
      box-sizing: border-box;
      border: 1px solid ${themeGet('colors.inactiveIcon', '#ebebeb')};
      transition: border-color 0.2s ease;
      margin-bottom: 10px;
      &:focus {
        outline: none;
        border-color: ${themeGet('colors.primary', '#028489')};
      }

      @media (min-width: 575px) {
        width: 59%;
        display: inline-block;
        margin-right: 20px;
        margin-bottom: 0;
      }
    }

    button {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${themeGet('colors.white', '#ffffff')};
      background-color: ${themeGet('colors.primary', '#028489')};
      min-height: 45px;
      min-width: 100%;
      border-radius: ${themeGet('radius.0', '3')}px;
      font-family: inherit;
      font-size: 14px;
      font-weight: ${themeGet('fontWeights.4', '500')};
      text-decoration: none;
      text-transform: capitalize;
      padding-top: ${themeGet('space.2', '8')}px;
      padding-bottom: ${themeGet('space.2', '8')}px;
      padding-left: ${themeGet('space.4', '15')}px;
      padding-right: ${themeGet('space.4', '15')}px;
      border: 0;
      transition: all 0.3s ease;
      span.btn-text {
        padding-left: ${themeGet('space.1', '4')}px;
        padding-right: ${themeGet('space.1', '4')}px;
      }
      span.btn-icon {
        display: flex;
        > div {
          display: flex !important;
        }
      }
      flex-shrink: 0;

      &:focus {
        outline: none;
      }

      
      &:hover {
        box-shadow: 0px 9px 20px -5px rgb(16 172 132 / 57%);
      }
      

      /* When button on loading stage */
      &.is-loading {
        .btn-text {
          padding-left: ${themeGet('space.2', '8')}px;
          padding-right: ${themeGet('space.2', '8')}px;
        }
      }

      @media (min-width: 575px) {
        min-width: 152px;
      }
    }

    .msg-alert{
      text-align: center;
    }
    
  }
`;

export { NewsletterForm };

export default NewsletterSectionWrapper;
