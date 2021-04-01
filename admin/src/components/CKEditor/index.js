import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@toantk911/ckeditor5-build-strapi-wysiwyg';
import styled from 'styled-components';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/ar';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/cs';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/de';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/es';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/fr';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/id';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/it';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/ko';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/nl';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/pl';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/pt';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/pt-br';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/ru';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/sk';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/th';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/tr';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/uk';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/vi';
import '@toantk911/ckeditor5-build-strapi-wysiwyg/build/translations/zh';


const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    max-height: 400px;
    > div {
      min-height: 200px;
      max-height: 400px;
    }
  }
`;

const Editor = ({ onChange, name, value, config }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={editor => {
          if (value) {
            editor.setData(value);
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
        config={config}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;