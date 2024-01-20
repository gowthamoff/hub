/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Mainpage Content Header
 *
 *    Usage                  :  Reuseable Header bar
 *
 *    Developed By and Date  :  Manoj - 21-11-2023
 *
 *    Modified By and Date   :  Mani - 28-12-2023
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import React, { useEffect, useRef, useState } from 'react';
import { Modal, Upload } from 'antd';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import { arrayMove, horizontalListSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PlusOutlined } from '@ant-design/icons';
import icon from './star_icon.svg';

const DraggableUploadListItem = ({ originNode, file, isFirst }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: file.uid
  });

  const style = {
    position: 'relative',
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'move'
  };

  return (
    <div ref={setNodeRef} style={style} className={isDragging ? 'is-dragging' : ''} {...attributes} {...listeners}>
      {isFirst && ( // Only add the star icon to the first file
        <img
          style={{ position: 'absolute', top: 0, right: 0, zIndex: '100' }}
          src={icon}
          width="32px"
          height="32px"
          alt="star"
        />
      )}
      {file.status === 'error' && isDragging ? originNode.props.children : originNode}
    </div>
  );
};

const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

const App = ({ onChange, uploadFile, imageUploadView }) => {
  // const image = 'https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8';

  // const initialImage = {
  //   uid: 'initialImage',
  //   name: 'default-image.jpg',
  //   status: 'done',
  //   url: image
  // };

  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  // const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10
    }
  });

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const customRequest = async options => {
    const { file, onProgress, onSuccess, onError } = options;
    setUploading(true);
    onProgress({ percent: 0 });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      onProgress({ percent: 100 });
      onSuccess();
    } catch (error) {
      onError(error);
    }
    setUploading(false);
  };

  const inputRef = useRef(null);
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setFileList(prev => {
        const activeIndex = prev.findIndex(i => i.uid === active.id);
        const overIndex = prev.findIndex(i => i.uid === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  useEffect(() => {
    if (uploadFile) {
      console.log(uploadFile);
      uploadFile && setFileList(uploadFile);
    }
    
  }, [uploadFile]);

  useEffect(() => {
    onChange && onChange(fileList);
  }, [fileList]);

  return (
    <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
      <SortableContext items={fileList?.map(i => i?.uid)} strategy={horizontalListSortingStrategy}>
        <Upload
          maxCount={5}
          listType="picture-card"
          fileList={fileList}
          customRequest={customRequest}
          onPreview={handlePreview}
          onChange={handleChange}
          multiple={true}
          onDrop={() => {
            console.log('called drag and drop');
          }}
          itemRender={(originNode, file) => {
            const indexes = fileList.findIndex(f => f.uid === file.uid);
            return <DraggableUploadListItem originNode={originNode} file={file} isFirst={indexes === 0} />;
          }}>
           {imageUploadView !== 1 && (
            <div onClick={() => inputRef.current.click()}>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
        <Modal visible={previewOpen} footer={null} onCancel={() => setPreviewOpen(false)}>
          <img alt="Preview" style={{ width: '97%' }} src={previewImage} />
        </Modal>
      </SortableContext>
    </DndContext>
  );
};
export default App;
